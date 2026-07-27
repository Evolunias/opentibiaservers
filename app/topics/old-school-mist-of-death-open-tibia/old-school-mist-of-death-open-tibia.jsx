import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-open-tibia');
}

export default function OldSchoolMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-open-tibia" />;
}
