import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-online');
}

export default function HighrateTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-online" />;
}
