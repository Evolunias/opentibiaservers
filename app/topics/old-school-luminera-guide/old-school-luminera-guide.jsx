import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-guide');
}

export default function OldSchoolLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-guide" />;
}
