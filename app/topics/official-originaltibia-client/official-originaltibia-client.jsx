import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-client');
}

export default function OfficialOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-client" />;
}
