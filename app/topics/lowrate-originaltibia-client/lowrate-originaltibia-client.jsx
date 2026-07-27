import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-client');
}

export default function LowrateOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-client" />;
}
