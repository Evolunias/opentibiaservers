import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-north-america');
}

export default function MidhemBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-north-america" />;
}
