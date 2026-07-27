import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-with-discord-server');
}

export default function Blazera12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-with-discord-server" />;
}
