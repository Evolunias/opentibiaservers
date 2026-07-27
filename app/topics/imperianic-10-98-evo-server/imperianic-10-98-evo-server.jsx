import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-98-evo-server');
}

export default function Imperianic1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-98-evo-server" />;
}
