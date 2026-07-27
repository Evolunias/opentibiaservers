import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-usa');
}

export default function NoResetDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-usa" />;
}
