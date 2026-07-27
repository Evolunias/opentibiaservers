import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-europe');
}

export default function FreshStartDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-europe" />;
}
