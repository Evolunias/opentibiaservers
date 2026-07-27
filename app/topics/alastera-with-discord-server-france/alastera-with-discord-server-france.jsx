import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-france');
}

export default function AlasteraWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-france" />;
}
