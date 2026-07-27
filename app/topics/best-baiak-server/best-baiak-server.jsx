import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-server');
}

export default function BestBaiakServerKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-server" />;
}
