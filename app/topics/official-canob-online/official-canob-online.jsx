import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-online');
}

export default function OfficialCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-canob-online" />;
}
