import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-online');
}

export default function NewSeasonTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-online" />;
}
