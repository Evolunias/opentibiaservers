import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-argentina');
}

export default function MidhemBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-argentina" />;
}
