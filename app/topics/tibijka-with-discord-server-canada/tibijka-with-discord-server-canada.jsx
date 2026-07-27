import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-canada');
}

export default function TibijkaWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-canada" />;
}
