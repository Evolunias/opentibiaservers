import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-old-school-server');
}

export default function Realesta772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-old-school-server" />;
}
