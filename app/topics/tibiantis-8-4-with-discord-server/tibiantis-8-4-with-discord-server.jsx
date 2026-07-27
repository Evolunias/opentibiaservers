import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-with-discord-server');
}

export default function Tibiantis84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-with-discord-server" />;
}
