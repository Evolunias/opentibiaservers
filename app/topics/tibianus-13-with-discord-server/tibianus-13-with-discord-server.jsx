import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-with-discord-server');
}

export default function Tibianus13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-with-discord-server" />;
}
