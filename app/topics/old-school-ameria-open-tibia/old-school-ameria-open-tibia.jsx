import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-open-tibia');
}

export default function OldSchoolAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-open-tibia" />;
}
