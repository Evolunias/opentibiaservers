import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-with-discord-server');
}

export default function Oldera86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-with-discord-server" />;
}
