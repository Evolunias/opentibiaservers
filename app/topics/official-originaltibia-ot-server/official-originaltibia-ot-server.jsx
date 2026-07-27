import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-ot-server');
}

export default function OfficialOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-ot-server" />;
}
