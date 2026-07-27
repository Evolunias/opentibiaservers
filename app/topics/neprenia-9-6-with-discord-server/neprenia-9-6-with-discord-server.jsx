import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-with-discord-server');
}

export default function Neprenia96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-with-discord-server" />;
}
