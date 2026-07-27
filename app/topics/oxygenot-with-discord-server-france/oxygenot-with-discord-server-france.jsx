import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-discord-server-france');
}

export default function OxygenotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-discord-server-france" />;
}
