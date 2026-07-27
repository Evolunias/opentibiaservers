import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-with-discord-server');
}

export default function Tibiaorigins12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-with-discord-server" />;
}
