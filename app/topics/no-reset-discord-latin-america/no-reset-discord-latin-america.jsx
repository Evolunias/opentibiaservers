import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-latin-america');
}

export default function NoResetDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-latin-america" />;
}
