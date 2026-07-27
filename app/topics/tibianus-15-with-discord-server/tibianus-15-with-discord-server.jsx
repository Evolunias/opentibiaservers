import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-with-discord-server');
}

export default function Tibianus15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-with-discord-server" />;
}
