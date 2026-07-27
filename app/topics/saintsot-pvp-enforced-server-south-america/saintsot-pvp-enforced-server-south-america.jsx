import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-south-america');
}

export default function SaintsotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-south-america" />;
}
