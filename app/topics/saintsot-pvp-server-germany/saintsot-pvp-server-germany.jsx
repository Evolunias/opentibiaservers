import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-germany');
}

export default function SaintsotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-germany" />;
}
