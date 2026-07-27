import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-client');
}

export default function OldSchoolLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-client" />;
}
