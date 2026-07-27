import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-discord');
}

export default function OldSchoolEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-discord" />;
}
