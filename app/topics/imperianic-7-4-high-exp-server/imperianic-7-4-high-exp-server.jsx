import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-high-exp-server');
}

export default function Imperianic74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-high-exp-server" />;
}
