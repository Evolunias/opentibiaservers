import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-client');
}

export default function TopOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-client" />;
}
