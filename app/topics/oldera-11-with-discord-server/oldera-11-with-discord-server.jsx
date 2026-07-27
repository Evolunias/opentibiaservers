import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-with-discord-server');
}

export default function Oldera11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-with-discord-server" />;
}
