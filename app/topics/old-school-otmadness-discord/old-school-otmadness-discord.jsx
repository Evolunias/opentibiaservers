import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-discord');
}

export default function OldSchoolOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-discord" />;
}
