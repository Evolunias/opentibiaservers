import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-tibia');
}

export default function OldSchoolOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-tibia" />;
}
