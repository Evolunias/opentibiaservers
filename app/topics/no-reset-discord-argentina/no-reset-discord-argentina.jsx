import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-argentina');
}

export default function NoResetDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-argentina" />;
}
