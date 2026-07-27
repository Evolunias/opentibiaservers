import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-open-tibia');
}

export default function LowrateDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-open-tibia" />;
}
