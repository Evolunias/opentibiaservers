import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-ot');
}

export default function HighrateDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-ot" />;
}
