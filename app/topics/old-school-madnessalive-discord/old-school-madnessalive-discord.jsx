import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-discord');
}

export default function OldSchoolMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-discord" />;
}
