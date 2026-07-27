import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-open-tibia');
}

export default function OldSchoolYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-open-tibia" />;
}
