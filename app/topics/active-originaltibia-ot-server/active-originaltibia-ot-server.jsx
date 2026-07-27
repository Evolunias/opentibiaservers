import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-ot-server');
}

export default function ActiveOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-ot-server" />;
}
