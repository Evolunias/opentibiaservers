import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-north-america');
}

export default function SaintsotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-north-america" />;
}
