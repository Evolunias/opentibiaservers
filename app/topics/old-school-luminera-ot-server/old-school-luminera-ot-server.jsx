import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-ot-server');
}

export default function OldSchoolLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-ot-server" />;
}
