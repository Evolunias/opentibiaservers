import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-with-discord-server');
}

export default function Tibianus12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-with-discord-server" />;
}
