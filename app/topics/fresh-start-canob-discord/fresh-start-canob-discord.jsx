import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-discord');
}

export default function FreshStartCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-discord" />;
}
