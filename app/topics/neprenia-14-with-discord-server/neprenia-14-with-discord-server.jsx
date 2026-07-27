import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-with-discord-server');
}

export default function Neprenia14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-with-discord-server" />;
}
