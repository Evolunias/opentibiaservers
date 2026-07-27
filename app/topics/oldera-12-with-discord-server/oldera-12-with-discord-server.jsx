import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-with-discord-server');
}

export default function Oldera12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-with-discord-server" />;
}
