import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-brazil');
}

export default function SaintsotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-brazil" />;
}
