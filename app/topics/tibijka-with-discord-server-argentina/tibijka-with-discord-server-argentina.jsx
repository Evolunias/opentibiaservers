import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-argentina');
}

export default function TibijkaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-argentina" />;
}
