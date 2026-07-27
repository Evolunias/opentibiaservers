import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-europe');
}

export default function RealestaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-europe" />;
}
