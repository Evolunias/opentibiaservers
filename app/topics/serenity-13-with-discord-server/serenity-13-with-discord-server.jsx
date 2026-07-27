import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-with-discord-server');
}

export default function Serenity13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-with-discord-server" />;
}
