import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-server');
}

export default function ActiveOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-server" />;
}
