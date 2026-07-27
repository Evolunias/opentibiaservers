import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-mexico');
}

export default function NoResetDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-mexico" />;
}
