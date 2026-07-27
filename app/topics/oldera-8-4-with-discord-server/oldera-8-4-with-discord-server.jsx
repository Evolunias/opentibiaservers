import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-with-discord-server');
}

export default function Oldera84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-with-discord-server" />;
}
