import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-with-discord-server');
}

export default function Serenity772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-with-discord-server" />;
}
