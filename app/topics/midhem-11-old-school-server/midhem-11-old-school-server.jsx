import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-old-school-server');
}

export default function Midhem11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-old-school-server" />;
}
