import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-with-discord-server');
}

export default function Blazera84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-with-discord-server" />;
}
