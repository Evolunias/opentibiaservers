import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-high-exp-server');
}

export default function Imperianic11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-high-exp-server" />;
}
