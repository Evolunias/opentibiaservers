import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-originaltibia-server');
}

export default function BaiakOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-originaltibia-server" />;
}
