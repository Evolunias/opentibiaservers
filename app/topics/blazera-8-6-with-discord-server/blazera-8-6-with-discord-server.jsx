import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-with-discord-server');
}

export default function Blazera86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-with-discord-server" />;
}
