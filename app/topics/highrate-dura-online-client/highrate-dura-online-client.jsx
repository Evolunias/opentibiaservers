import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-client');
}

export default function HighrateDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-client" />;
}
