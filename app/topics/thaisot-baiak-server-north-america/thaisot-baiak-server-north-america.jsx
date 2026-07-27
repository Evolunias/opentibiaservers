import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-north-america');
}

export default function ThaisotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-north-america" />;
}
