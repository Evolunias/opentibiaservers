import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-old-school-server');
}

export default function Realesta14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-old-school-server" />;
}
