import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-online');
}

export default function OfficialTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-online" />;
}
