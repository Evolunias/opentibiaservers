import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-tibia');
}

export default function OldSchoolRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-tibia" />;
}
