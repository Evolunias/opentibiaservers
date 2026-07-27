import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-server');
}

export default function OldSchoolLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-server" />;
}
