import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-ot-server');
}

export default function TopOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-ot-server" />;
}
