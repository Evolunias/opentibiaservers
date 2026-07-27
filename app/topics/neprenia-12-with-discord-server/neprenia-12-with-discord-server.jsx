import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-with-discord-server');
}

export default function Neprenia12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-with-discord-server" />;
}
