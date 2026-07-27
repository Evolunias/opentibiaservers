import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-france');
}

export default function NoResetDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-france" />;
}
