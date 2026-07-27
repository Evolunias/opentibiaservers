import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-register');
}

export default function LowrateDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-register" />;
}
