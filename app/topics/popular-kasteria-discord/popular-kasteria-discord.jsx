import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-discord');
}

export default function PopularKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-discord" />;
}
