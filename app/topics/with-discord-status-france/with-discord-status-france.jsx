import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-france');
}

export default function WithDiscordStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-france" />;
}
