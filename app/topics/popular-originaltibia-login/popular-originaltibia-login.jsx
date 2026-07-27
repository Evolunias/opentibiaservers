import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-login');
}

export default function PopularOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-login" />;
}
