import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-with-discord-server');
}

export default function Saintsot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-with-discord-server" />;
}
