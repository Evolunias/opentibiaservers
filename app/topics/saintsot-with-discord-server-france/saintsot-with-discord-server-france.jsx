import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-discord-server-france');
}

export default function SaintsotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-discord-server-france" />;
}
