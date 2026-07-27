import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-with-discord-server');
}

export default function Tibiantis12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-with-discord-server" />;
}
