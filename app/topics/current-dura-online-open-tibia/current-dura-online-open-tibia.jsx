import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-open-tibia');
}

export default function CurrentDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-open-tibia" />;
}
