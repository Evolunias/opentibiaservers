import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-open-tibia');
}

export default function OldSchoolRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-open-tibia" />;
}
