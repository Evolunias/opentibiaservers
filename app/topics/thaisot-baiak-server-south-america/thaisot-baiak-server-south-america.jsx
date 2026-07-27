import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-south-america');
}

export default function ThaisotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-south-america" />;
}
