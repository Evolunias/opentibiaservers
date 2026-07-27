import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-old-school-server');
}

export default function Classicus14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-old-school-server" />;
}
