import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-with-discord-server');
}

export default function Neprenia100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-with-discord-server" />;
}
