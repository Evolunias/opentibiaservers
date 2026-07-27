import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-with-discord-server');
}

export default function Neprenia15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-with-discord-server" />;
}
