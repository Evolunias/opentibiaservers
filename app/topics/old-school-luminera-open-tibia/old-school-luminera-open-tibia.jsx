import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-open-tibia');
}

export default function OldSchoolLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-open-tibia" />;
}
