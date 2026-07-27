import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-online');
}

export default function TopTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-online" />;
}
