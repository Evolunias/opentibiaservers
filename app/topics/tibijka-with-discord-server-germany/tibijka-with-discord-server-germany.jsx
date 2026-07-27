import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-germany');
}

export default function TibijkaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-germany" />;
}
