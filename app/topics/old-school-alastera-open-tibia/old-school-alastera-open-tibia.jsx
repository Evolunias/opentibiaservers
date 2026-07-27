import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-open-tibia');
}

export default function OldSchoolAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-open-tibia" />;
}
