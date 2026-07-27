import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-tibia');
}

export default function OldSchoolMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-tibia" />;
}
