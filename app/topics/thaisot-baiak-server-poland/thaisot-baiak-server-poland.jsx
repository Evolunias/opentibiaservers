import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-poland');
}

export default function ThaisotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-poland" />;
}
