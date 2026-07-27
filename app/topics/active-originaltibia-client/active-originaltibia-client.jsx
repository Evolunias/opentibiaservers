import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-client');
}

export default function ActiveOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-client" />;
}
