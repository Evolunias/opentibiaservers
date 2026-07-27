import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-with-discord-server');
}

export default function Originaltibia12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-with-discord-server" />;
}
