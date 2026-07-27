import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-germany');
}

export default function ThaisotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-germany" />;
}
