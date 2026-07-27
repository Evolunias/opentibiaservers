import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-server');
}

export default function OfficialOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-server" />;
}
