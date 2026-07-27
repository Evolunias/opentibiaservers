import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-with-discord-server');
}

export default function Blazera100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-with-discord-server" />;
}
