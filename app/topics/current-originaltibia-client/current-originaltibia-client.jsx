import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-client');
}

export default function CurrentOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-client" />;
}
