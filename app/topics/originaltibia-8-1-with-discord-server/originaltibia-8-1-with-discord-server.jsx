import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-with-discord-server');
}

export default function Originaltibia81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-with-discord-server" />;
}
