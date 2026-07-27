import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-discord-server-france');
}

export default function NoxiousotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-discord-server-france" />;
}
