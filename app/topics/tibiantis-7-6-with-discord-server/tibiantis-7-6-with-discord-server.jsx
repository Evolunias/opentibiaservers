import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-with-discord-server');
}

export default function Tibiantis76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-with-discord-server" />;
}
