import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-with-discord-server');
}

export default function Serenity11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-with-discord-server" />;
}
