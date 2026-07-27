import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-with-discord-server');
}

export default function Neprenia11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-with-discord-server" />;
}
