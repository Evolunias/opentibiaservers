import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-private-server');
}

export default function PopularNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-private-server" />;
}
