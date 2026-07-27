import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-with-discord-server');
}

export default function Blazera15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-with-discord-server" />;
}
