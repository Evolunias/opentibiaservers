import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-tibia');
}

export default function OldSchoolMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-tibia" />;
}
