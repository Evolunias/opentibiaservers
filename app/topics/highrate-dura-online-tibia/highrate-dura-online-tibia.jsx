import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-tibia');
}

export default function HighrateDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-tibia" />;
}
