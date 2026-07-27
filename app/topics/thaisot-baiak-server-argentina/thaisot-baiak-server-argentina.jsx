import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-argentina');
}

export default function ThaisotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-argentina" />;
}
