import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-tibia');
}

export default function OldSchoolEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-tibia" />;
}
