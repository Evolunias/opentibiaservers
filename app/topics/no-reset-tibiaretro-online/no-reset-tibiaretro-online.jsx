import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-online');
}

export default function NoResetTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-online" />;
}
