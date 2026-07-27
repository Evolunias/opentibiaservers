import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-old-school-server');
}

export default function Midhem12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-old-school-server" />;
}
