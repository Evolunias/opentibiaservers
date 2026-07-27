import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-sweden');
}

export default function SaintsotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-sweden" />;
}
