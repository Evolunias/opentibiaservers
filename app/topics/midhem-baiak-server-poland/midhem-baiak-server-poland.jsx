import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-poland');
}

export default function MidhemBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-poland" />;
}
