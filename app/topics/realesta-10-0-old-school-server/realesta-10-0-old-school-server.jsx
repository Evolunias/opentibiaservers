import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-old-school-server');
}

export default function Realesta100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-old-school-server" />;
}
