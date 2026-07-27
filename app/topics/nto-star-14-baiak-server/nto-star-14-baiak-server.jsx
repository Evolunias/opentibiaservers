import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-baiak-server');
}

export default function NtoStar14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-baiak-server" />;
}
