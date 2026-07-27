import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-france');
}

export default function HarmoniaOtWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-france" />;
}
