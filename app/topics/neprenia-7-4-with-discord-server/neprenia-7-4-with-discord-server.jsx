import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-with-discord-server');
}

export default function Neprenia74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-with-discord-server" />;
}
