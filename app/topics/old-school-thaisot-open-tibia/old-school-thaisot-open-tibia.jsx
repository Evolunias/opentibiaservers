import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-open-tibia');
}

export default function OldSchoolThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-open-tibia" />;
}
