import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-register');
}

export default function HighrateDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-register" />;
}
