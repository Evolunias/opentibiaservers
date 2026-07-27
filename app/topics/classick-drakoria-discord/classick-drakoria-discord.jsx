import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-discord');
}

export default function ClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-discord" />;
}
