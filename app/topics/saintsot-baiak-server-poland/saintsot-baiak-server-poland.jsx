import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-poland');
}

export default function SaintsotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-poland" />;
}
