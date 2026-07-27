import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-online');
}

export default function ActiveTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-online" />;
}
