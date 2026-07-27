import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-online');
}

export default function OfficialMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-online" />;
}
