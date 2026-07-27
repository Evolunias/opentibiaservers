import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-server');
}

export default function TopOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-server" />;
}
