import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-uk');
}

export default function ThaisotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-uk" />;
}
