import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-discord');
}

export default function LowrateClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-discord" />;
}
