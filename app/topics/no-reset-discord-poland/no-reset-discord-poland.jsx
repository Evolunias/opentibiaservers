import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-poland');
}

export default function NoResetDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-poland" />;
}
