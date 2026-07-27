import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-baiak-server');
}

export default function NtoStar76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-baiak-server" />;
}
