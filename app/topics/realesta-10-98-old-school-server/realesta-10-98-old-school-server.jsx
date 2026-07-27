import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-old-school-server');
}

export default function Realesta1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-old-school-server" />;
}
