import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-europe');
}

export default function ThaisotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-europe" />;
}
