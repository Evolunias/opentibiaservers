import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-evo-server');
}

export default function Imperianic100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-evo-server" />;
}
