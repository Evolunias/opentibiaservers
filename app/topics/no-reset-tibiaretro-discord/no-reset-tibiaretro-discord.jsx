import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-discord');
}

export default function NoResetTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-discord" />;
}
