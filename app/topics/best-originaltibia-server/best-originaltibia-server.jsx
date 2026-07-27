import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-server');
}

export default function BestOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-server" />;
}
