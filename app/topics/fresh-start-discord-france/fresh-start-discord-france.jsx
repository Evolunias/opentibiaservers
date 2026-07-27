import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-france');
}

export default function FreshStartDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-france" />;
}
