import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-discord');
}

export default function NewClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-discord" />;
}
