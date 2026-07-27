import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-server');
}

export default function OldSchoolClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-server" />;
}
