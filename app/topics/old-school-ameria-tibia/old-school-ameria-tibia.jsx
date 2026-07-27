import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-tibia');
}

export default function OldSchoolAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-tibia" />;
}
