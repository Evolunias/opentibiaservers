import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-discord');
}

export default function OldSchoolMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-discord" />;
}
