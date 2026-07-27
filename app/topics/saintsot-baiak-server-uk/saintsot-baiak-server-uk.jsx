import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-uk');
}

export default function SaintsotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-uk" />;
}
