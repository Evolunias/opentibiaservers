import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-open-tibia');
}

export default function OldSchoolNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-open-tibia" />;
}
