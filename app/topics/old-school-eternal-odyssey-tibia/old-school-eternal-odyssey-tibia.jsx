import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-tibia');
}

export default function OldSchoolEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-tibia" />;
}
