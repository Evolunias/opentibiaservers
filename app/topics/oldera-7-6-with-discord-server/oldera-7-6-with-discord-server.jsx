import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-with-discord-server');
}

export default function Oldera76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-with-discord-server" />;
}
