import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-canada');
}

export default function SaintsotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-canada" />;
}
