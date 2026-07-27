import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-client');
}

export default function PopularOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-client" />;
}
