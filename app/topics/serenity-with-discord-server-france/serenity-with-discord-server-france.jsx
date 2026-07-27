import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-discord-server-france');
}

export default function SerenityWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-discord-server-france" />;
}
