import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-login');
}

export default function OfficialZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-login" />;
}
