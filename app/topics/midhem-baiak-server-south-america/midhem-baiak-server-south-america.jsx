import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-south-america');
}

export default function MidhemBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-south-america" />;
}
