import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-south-america');
}

export default function SaintsotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-south-america" />;
}
