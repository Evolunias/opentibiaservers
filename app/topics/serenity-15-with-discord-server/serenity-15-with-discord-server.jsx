import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-with-discord-server');
}

export default function Serenity15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-with-discord-server" />;
}
