import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-discord');
}

export default function BestClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-discord" />;
}
