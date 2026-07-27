import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-with-discord-server');
}

export default function Tibianus84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-with-discord-server" />;
}
