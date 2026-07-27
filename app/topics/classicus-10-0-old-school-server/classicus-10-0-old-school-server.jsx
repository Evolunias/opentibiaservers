import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-old-school-server');
}

export default function Classicus100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-old-school-server" />;
}
