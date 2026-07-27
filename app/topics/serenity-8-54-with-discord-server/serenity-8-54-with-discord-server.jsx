import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-with-discord-server');
}

export default function Serenity854WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-with-discord-server" />;
}
