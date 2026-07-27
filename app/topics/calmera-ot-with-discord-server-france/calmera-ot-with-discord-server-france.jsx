import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-discord-server-france');
}

export default function CalmeraOtWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-discord-server-france" />;
}
