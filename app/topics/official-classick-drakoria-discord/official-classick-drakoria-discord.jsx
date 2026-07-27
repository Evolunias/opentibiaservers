import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-discord');
}

export default function OfficialClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-discord" />;
}
