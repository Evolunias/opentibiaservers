import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-with-discord-server');
}

export default function Originaltibia76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-with-discord-server" />;
}
