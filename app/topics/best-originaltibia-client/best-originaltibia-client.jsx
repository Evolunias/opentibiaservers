import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-client');
}

export default function BestOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-client" />;
}
