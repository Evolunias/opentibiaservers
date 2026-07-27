import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-login');
}

export default function OldSchoolLumineraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-login" />;
}
