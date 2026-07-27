import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-tibia');
}

export default function OldSchoolBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-tibia" />;
}
