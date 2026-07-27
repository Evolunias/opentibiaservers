import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-europe');
}

export default function MidhemBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-europe" />;
}
