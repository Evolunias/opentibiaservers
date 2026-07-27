import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-register');
}

export default function PopularOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-register" />;
}
