import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-open-tibia');
}

export default function OldSchoolEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-open-tibia" />;
}
