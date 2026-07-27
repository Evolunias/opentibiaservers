import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-usa');
}

export default function ThaisotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-usa" />;
}
