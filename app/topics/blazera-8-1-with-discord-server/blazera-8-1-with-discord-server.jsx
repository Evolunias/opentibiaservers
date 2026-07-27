import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-with-discord-server');
}

export default function Blazera81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-with-discord-server" />;
}
