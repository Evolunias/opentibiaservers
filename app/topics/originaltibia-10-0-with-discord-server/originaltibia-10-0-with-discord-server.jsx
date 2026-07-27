import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-with-discord-server');
}

export default function Originaltibia100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-with-discord-server" />;
}
