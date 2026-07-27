import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-old-school-server');
}

export default function Realesta12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-old-school-server" />;
}
