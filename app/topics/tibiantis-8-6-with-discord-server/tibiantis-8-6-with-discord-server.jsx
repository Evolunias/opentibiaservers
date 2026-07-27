import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-with-discord-server');
}

export default function Tibiantis86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-with-discord-server" />;
}
