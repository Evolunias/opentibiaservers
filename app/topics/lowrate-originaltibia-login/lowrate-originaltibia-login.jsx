import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-login');
}

export default function LowrateOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-login" />;
}
