import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-login');
}

export default function OfficialOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-login" />;
}
