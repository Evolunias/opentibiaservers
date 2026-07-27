import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-with-discord-server');
}

export default function Rubinot86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-with-discord-server" />;
}
