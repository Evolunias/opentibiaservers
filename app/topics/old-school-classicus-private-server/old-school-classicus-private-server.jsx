import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-private-server');
}

export default function OldSchoolClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-private-server" />;
}
