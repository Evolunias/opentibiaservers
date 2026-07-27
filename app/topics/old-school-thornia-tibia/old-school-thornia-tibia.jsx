import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-tibia');
}

export default function OldSchoolThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-tibia" />;
}
