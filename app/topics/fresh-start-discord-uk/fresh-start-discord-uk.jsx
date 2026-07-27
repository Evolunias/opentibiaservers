import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-uk');
}

export default function FreshStartDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-uk" />;
}
