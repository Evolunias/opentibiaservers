import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-online');
}

export default function PopularMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-online" />;
}
