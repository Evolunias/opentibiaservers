import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-tibia');
}

export default function LowrateDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-tibia" />;
}
