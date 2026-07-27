import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-high-exp-server');
}

export default function Imperianic15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-high-exp-server" />;
}
