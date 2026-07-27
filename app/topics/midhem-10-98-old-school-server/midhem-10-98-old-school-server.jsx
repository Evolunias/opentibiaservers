import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-old-school-server');
}

export default function Midhem1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-old-school-server" />;
}
