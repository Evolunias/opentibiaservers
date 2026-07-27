import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-ots');
}

export default function OldSchoolLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-ots" />;
}
