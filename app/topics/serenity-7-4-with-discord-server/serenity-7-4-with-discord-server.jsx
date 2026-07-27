import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-with-discord-server');
}

export default function Serenity74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-with-discord-server" />;
}
