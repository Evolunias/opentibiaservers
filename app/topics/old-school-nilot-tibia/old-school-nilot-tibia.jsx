import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-tibia');
}

export default function OldSchoolNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-tibia" />;
}
