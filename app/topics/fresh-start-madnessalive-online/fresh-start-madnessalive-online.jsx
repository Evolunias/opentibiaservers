import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-online');
}

export default function FreshStartMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-online" />;
}
