import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-discord');
}

export default function PopularClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-discord" />;
}
