import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-open-tibia');
}

export default function OldSchoolClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-open-tibia" />;
}
