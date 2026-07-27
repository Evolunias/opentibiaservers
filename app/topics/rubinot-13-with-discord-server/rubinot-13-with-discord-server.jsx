import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-with-discord-server');
}

export default function Rubinot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-with-discord-server" />;
}
