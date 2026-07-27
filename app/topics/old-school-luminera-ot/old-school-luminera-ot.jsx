import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-ot');
}

export default function OldSchoolLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-ot" />;
}
