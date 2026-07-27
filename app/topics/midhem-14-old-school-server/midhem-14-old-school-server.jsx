import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-old-school-server');
}

export default function Midhem14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-old-school-server" />;
}
