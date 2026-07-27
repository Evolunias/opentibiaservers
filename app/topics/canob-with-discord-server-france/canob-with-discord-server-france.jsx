import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-france');
}

export default function CanobWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-france" />;
}
