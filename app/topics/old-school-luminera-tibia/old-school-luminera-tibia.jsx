import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-tibia');
}

export default function OldSchoolLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-tibia" />;
}
