import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-france');
}

export default function RealeraWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-france" />;
}
