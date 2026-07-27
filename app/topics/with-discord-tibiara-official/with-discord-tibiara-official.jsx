import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-official');
}

export default function WithDiscordTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-official" />;
}
