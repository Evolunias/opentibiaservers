import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-with-discord-server');
}

export default function Oldera15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-with-discord-server" />;
}
