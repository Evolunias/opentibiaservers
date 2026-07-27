import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-with-discord-server');
}

export default function Originaltibia15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-with-discord-server" />;
}
