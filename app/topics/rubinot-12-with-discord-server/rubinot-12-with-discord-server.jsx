import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-with-discord-server');
}

export default function Rubinot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-with-discord-server" />;
}
