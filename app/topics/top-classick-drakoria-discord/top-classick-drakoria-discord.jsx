import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-discord');
}

export default function TopClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-discord" />;
}
