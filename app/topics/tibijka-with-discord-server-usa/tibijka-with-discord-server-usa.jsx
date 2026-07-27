import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-usa');
}

export default function TibijkaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-usa" />;
}
