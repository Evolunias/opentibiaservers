import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-old-school-server');
}

export default function Midhem772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-old-school-server" />;
}
