import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-open-tibia');
}

export default function OldSchoolRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-open-tibia" />;
}
