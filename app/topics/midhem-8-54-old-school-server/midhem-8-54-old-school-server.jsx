import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-old-school-server');
}

export default function Midhem854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-old-school-server" />;
}
