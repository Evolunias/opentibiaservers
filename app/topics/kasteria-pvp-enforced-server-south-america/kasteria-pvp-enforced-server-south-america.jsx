import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-south-america');
}

export default function KasteriaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-south-america" />;
}
