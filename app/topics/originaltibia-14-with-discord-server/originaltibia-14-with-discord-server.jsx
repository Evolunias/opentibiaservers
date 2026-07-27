import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-with-discord-server');
}

export default function Originaltibia14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-with-discord-server" />;
}
