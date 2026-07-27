import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-tibia');
}

export default function OldSchoolMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-tibia" />;
}
