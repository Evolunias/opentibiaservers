import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-open-tibia');
}

export default function OldSchoolArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-open-tibia" />;
}
