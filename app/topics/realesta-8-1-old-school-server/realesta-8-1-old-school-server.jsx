import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-old-school-server');
}

export default function Realesta81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-old-school-server" />;
}
