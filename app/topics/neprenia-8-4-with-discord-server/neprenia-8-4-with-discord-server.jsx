import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-with-discord-server');
}

export default function Neprenia84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-with-discord-server" />;
}
