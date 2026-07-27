import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-europe');
}

export default function TibijkaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-europe" />;
}
