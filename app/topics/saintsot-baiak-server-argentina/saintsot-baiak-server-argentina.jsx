import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-argentina');
}

export default function SaintsotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-argentina" />;
}
