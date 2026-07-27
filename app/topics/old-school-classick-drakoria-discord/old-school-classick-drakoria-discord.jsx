import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-discord');
}

export default function OldSchoolClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-discord" />;
}
