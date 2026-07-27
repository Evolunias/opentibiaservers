import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-germany');
}

export default function SaintsotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-germany" />;
}
