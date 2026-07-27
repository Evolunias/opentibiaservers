import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-france');
}

export default function TibijkaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-france" />;
}
