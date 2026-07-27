import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-login');
}

export default function CustomOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-login" />;
}
