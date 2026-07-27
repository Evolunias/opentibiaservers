import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-old-school-server');
}

export default function Midhem13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-old-school-server" />;
}
