import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-online');
}

export default function FreshStartTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-online" />;
}
