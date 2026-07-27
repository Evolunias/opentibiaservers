import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-discord');
}

export default function NoResetTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-discord" />;
}
