import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-online');
}

export default function PopularTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-online" />;
}
