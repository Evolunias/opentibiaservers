import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-uk');
}

export default function NoResetDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-uk" />;
}
