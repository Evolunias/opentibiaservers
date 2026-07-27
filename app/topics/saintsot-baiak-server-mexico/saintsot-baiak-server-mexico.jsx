import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-mexico');
}

export default function SaintsotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-mexico" />;
}
