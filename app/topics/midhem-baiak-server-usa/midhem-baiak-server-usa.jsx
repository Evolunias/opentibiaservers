import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-usa');
}

export default function MidhemBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-usa" />;
}
