import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-old-school-server');
}

export default function Midhem74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-old-school-server" />;
}
