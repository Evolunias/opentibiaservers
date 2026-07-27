import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-discord');
}

export default function ActiveClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-discord" />;
}
