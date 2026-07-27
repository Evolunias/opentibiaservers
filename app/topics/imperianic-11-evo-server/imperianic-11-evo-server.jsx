import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-evo-server');
}

export default function Imperianic11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-evo-server" />;
}
