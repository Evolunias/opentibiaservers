import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-open-tibia');
}

export default function OldSchoolOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-open-tibia" />;
}
