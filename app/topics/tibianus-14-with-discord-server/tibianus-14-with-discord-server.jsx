import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-with-discord-server');
}

export default function Tibianus14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-with-discord-server" />;
}
