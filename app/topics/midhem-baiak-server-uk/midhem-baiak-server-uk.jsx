import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-uk');
}

export default function MidhemBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-uk" />;
}
