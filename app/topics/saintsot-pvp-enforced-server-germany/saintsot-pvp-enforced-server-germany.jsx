import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-germany');
}

export default function SaintsotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-germany" />;
}
