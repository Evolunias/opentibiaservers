import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-discord');
}

export default function PopularRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-discord" />;
}
