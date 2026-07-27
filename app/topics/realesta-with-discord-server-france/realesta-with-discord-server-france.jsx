import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-france');
}

export default function RealestaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-france" />;
}
