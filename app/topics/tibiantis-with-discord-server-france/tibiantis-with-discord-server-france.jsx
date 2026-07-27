import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-france');
}

export default function TibiantisWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-france" />;
}
