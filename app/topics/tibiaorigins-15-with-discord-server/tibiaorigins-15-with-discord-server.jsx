import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-with-discord-server');
}

export default function Tibiaorigins15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-with-discord-server" />;
}
