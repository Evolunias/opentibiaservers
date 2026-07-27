import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-germany');
}

export default function MidhemBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-germany" />;
}
