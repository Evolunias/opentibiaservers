import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-with-discord-server');
}

export default function Serenity76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-with-discord-server" />;
}
