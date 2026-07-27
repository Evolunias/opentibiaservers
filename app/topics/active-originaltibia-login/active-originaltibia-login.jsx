import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-login');
}

export default function ActiveOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-login" />;
}
