import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-online');
}

export default function NewSeasonMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-online" />;
}
