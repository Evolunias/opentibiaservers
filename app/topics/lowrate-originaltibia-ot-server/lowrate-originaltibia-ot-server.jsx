import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-ot-server');
}

export default function LowrateOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-ot-server" />;
}
