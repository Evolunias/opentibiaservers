import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-with-discord-server');
}

export default function Tibianus11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-with-discord-server" />;
}
