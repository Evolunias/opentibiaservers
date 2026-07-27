import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-with-discord-server');
}

export default function Serenity1098WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-with-discord-server" />;
}
