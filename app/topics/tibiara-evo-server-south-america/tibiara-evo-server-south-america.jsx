import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-south-america');
}

export default function TibiaraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-south-america" />;
}
