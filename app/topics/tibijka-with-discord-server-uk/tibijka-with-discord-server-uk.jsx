import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-uk');
}

export default function TibijkaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-uk" />;
}
