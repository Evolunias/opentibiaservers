import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-france');
}

export default function TibiascapeWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-france" />;
}
