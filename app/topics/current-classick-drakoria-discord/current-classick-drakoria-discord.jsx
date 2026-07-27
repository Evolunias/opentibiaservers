import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-discord');
}

export default function CurrentClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-discord" />;
}
