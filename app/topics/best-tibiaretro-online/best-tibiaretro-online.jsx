import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-online');
}

export default function BestTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-online" />;
}
