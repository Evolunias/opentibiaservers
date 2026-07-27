import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-ot-server');
}

export default function CurrentOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-ot-server" />;
}
