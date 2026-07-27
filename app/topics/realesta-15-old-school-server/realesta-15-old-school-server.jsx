import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-old-school-server');
}

export default function Realesta15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-old-school-server" />;
}
