import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-brazil');
}

export default function MidhemBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-brazil" />;
}
