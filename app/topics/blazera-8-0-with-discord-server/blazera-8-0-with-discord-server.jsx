import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-with-discord-server');
}

export default function Blazera80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-with-discord-server" />;
}
