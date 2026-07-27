import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-canada');
}

export default function ThaisotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-canada" />;
}
