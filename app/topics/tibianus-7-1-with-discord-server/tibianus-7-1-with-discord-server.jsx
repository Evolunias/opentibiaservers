import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-with-discord-server');
}

export default function Tibianus71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-with-discord-server" />;
}
