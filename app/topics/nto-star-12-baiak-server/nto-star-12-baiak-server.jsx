import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-baiak-server');
}

export default function NtoStar12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-baiak-server" />;
}
