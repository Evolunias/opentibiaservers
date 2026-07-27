import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-discord');
}

export default function PopularCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-discord" />;
}
