import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-online');
}

export default function CurrentMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-online" />;
}
