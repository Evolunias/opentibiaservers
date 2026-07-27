import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-north-america');
}

export default function SaintsotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-north-america" />;
}
