import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-tibia');
}

export default function OldSchoolAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-tibia" />;
}
