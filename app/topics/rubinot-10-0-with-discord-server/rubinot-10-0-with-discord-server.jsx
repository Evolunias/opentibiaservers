import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-with-discord-server');
}

export default function Rubinot100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-with-discord-server" />;
}
