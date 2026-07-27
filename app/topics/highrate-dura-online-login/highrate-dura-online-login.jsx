import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-login');
}

export default function HighrateDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-login" />;
}
