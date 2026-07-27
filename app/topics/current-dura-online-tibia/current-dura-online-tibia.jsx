import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-tibia');
}

export default function CurrentDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-tibia" />;
}
