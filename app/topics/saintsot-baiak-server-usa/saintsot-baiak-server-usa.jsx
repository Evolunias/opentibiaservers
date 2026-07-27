import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-usa');
}

export default function SaintsotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-usa" />;
}
