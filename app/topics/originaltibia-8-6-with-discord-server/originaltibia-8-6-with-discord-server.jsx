import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-with-discord-server');
}

export default function Originaltibia86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-with-discord-server" />;
}
