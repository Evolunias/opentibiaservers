import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-with-discord-server');
}

export default function Oldera14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-with-discord-server" />;
}
