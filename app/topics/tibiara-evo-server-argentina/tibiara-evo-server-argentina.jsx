import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-argentina');
}

export default function TibiaraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-argentina" />;
}
