import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-online');
}

export default function CurrentTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-online" />;
}
