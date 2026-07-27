import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-discord');
}

export default function NoResetTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-discord" />;
}
