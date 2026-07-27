import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-register');
}

export default function OfficialDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-register" />;
}
