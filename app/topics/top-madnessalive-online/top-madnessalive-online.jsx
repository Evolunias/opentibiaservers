import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-online');
}

export default function TopMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-online" />;
}
