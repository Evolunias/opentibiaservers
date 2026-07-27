import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-online');
}

export default function LowrateMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-online" />;
}
