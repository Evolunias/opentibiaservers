import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-france');
}

export default function ThaisotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-france" />;
}
