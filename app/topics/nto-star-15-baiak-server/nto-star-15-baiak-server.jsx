import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-baiak-server');
}

export default function NtoStar15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-baiak-server" />;
}
