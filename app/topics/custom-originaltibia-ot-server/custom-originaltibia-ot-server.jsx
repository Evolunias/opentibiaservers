import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-ot-server');
}

export default function CustomOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-ot-server" />;
}
