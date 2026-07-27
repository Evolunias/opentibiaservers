import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-with-discord-server');
}

export default function Tibiantis80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-with-discord-server" />;
}
