import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-server');
}

export default function OldSchoolRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-server" />;
}
