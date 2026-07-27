import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-with-discord-server');
}

export default function Alastera1098WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-with-discord-server" />;
}
