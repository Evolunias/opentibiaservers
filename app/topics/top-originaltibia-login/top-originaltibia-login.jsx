import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-login');
}

export default function TopOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-login" />;
}
