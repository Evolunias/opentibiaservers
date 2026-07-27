import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-discord');
}

export default function FreshStartNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-discord" />;
}
