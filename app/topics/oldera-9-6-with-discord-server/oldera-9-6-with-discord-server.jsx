import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-with-discord-server');
}

export default function Oldera96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-with-discord-server" />;
}
