import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-private-server');
}

export default function PopularNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-private-server" />;
}
