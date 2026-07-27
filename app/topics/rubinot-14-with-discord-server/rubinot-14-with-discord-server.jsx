import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-with-discord-server');
}

export default function Rubinot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-with-discord-server" />;
}
