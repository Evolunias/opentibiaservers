import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera');
}

export default function OldSchoolLumineraKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera" />;
}
