import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-with-discord-server');
}

export default function Blazera76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-with-discord-server" />;
}
