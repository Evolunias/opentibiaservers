import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-register');
}

export default function OfficialZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-register" />;
}
