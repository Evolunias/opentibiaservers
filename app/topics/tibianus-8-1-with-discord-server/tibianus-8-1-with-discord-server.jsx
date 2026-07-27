import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-with-discord-server');
}

export default function Tibianus81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-with-discord-server" />;
}
