import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-europe');
}

export default function NoResetDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-europe" />;
}
