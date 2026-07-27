import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-server');
}

export default function CustomOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-server" />;
}
