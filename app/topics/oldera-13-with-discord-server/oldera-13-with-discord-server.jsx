import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-with-discord-server');
}

export default function Oldera13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-with-discord-server" />;
}
