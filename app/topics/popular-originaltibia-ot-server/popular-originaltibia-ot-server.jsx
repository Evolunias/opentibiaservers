import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-ot-server');
}

export default function PopularOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-ot-server" />;
}
