import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-online');
}

export default function LowrateTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-online" />;
}
