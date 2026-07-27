import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-france');
}

export default function NostaltherWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-france" />;
}
