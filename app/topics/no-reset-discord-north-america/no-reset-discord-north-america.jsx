import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-north-america');
}

export default function NoResetDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-north-america" />;
}
