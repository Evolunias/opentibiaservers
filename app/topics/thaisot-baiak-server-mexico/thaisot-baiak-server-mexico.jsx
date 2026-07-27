import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-mexico');
}

export default function ThaisotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-mexico" />;
}
