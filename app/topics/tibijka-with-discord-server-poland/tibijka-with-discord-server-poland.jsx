import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-poland');
}

export default function TibijkaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-poland" />;
}
