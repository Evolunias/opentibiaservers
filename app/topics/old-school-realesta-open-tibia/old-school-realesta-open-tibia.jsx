import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-open-tibia');
}

export default function OldSchoolRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-open-tibia" />;
}
