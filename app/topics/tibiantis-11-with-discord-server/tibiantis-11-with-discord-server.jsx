import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-with-discord-server');
}

export default function Tibiantis11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-with-discord-server" />;
}
