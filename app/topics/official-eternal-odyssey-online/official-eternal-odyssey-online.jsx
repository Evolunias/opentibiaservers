import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-online');
}

export default function OfficialEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-online" />;
}
