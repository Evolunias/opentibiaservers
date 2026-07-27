import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-private-server');
}

export default function PopularKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-private-server" />;
}
