import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-open-tibia');
}

export default function OldSchoolMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-open-tibia" />;
}
