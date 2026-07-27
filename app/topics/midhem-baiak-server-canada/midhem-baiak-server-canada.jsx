import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-canada');
}

export default function MidhemBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-canada" />;
}
