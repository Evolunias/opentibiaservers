import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-with-discord-server');
}

export default function Neprenia86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-with-discord-server" />;
}
