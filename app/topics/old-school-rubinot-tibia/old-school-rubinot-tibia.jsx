import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-tibia');
}

export default function OldSchoolRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-tibia" />;
}
