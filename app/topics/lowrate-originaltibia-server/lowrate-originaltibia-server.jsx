import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-server');
}

export default function LowrateOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-server" />;
}
