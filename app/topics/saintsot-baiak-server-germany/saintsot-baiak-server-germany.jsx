import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-germany');
}

export default function SaintsotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-germany" />;
}
