import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-register');
}

export default function OfficialOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-register" />;
}
