import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-discord');
}

export default function PopularRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-discord" />;
}
