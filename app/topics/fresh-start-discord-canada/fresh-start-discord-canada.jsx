import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-canada');
}

export default function FreshStartDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-canada" />;
}
