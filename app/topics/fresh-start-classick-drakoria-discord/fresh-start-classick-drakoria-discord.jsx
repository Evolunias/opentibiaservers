import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-discord');
}

export default function FreshStartClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-discord" />;
}
