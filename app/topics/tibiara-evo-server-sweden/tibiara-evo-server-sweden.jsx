import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-sweden');
}

export default function TibiaraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-sweden" />;
}
