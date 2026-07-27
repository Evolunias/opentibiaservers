import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-with-discord-server');
}

export default function Tibiantis100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-with-discord-server" />;
}
