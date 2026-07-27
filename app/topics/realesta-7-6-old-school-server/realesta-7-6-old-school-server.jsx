import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-old-school-server');
}

export default function Realesta76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-old-school-server" />;
}
