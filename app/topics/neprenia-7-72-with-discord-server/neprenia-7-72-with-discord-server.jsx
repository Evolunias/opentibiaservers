import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-with-discord-server');
}

export default function Neprenia772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-with-discord-server" />;
}
