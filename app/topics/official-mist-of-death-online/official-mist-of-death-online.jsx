import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-online');
}

export default function OfficialMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-online" />;
}
