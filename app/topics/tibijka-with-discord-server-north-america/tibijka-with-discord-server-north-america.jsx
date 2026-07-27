import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-north-america');
}

export default function TibijkaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-north-america" />;
}
