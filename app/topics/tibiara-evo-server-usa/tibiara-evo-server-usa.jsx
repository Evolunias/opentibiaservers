import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-usa');
}

export default function TibiaraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-usa" />;
}
