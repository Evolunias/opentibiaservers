import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-official');
}

export default function HighrateDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-official" />;
}
