import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-old-school-server');
}

export default function Midhem71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-old-school-server" />;
}
