import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-private-server');
}

export default function OldSchoolLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-private-server" />;
}
