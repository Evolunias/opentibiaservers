import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-high-exp-server');
}

export default function Imperianic12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-high-exp-server" />;
}
