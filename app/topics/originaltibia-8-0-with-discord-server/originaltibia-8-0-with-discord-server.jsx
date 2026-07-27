import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-with-discord-server');
}

export default function Originaltibia80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-with-discord-server" />;
}
