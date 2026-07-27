import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-private-server');
}

export default function PopularOriginaltibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-private-server" />;
}
