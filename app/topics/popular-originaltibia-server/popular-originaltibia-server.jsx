import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-server');
}

export default function PopularOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-server" />;
}
