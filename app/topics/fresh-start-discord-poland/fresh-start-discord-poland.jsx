import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-discord-poland');
}

export default function FreshStartDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-discord-poland" />;
}
