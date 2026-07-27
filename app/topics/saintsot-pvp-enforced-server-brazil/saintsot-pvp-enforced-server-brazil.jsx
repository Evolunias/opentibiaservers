import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-brazil');
}

export default function SaintsotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-brazil" />;
}
