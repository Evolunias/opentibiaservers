import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-with-discord-server');
}

export default function Blazera96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-with-discord-server" />;
}
