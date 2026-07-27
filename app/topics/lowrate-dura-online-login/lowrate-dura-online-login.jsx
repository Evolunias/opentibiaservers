import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-login');
}

export default function LowrateDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-login" />;
}
