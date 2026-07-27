import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-with-discord-server');
}

export default function Tibiantis14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-with-discord-server" />;
}
