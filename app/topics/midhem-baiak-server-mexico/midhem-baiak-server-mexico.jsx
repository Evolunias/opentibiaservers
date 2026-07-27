import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-mexico');
}

export default function MidhemBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-mexico" />;
}
