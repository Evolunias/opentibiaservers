import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-high-exp-server');
}

export default function Imperianic80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-high-exp-server" />;
}
