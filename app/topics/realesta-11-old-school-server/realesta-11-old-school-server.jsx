import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-old-school-server');
}

export default function Realesta11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-old-school-server" />;
}
