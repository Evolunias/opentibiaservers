import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-canada');
}

export default function NoResetDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-canada" />;
}
