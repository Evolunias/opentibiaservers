import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-discord-server-france');
}

export default function InfernalOtWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-discord-server-france" />;
}
