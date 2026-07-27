import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-open-tibia');
}

export default function HighrateDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-open-tibia" />;
}
