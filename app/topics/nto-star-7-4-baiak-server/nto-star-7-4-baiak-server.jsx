import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-baiak-server');
}

export default function NtoStar74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-baiak-server" />;
}
