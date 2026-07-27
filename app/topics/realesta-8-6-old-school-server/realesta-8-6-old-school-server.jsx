import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-old-school-server');
}

export default function Realesta86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-old-school-server" />;
}
