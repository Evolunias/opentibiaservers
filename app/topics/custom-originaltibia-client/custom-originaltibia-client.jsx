import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-client');
}

export default function CustomOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-client" />;
}
