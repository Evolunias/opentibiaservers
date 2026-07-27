import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-with-discord-server');
}

export default function Neprenia13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-with-discord-server" />;
}
