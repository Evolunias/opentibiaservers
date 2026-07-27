import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-europe');
}

export default function SaintsotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-europe" />;
}
