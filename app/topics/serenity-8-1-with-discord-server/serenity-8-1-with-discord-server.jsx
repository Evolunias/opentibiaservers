import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-with-discord-server');
}

export default function Serenity81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-with-discord-server" />;
}
