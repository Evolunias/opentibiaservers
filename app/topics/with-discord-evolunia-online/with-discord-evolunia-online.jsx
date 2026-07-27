import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-online');
}

export default function WithDiscordEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-online" />;
}
