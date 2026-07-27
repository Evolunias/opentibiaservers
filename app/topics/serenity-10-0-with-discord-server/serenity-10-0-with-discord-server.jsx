import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-with-discord-server');
}

export default function Serenity100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-with-discord-server" />;
}
