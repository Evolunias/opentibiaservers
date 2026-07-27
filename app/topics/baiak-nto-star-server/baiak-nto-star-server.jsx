import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-nto-star-server');
}

export default function BaiakNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-nto-star-server" />;
}
