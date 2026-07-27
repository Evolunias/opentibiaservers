import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-with-discord-server');
}

export default function Tibiantis74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-with-discord-server" />;
}
