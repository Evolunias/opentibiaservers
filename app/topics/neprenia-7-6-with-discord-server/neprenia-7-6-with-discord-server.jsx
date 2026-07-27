import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-with-discord-server');
}

export default function Neprenia76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-with-discord-server" />;
}
