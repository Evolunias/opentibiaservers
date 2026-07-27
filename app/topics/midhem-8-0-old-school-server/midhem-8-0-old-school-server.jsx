import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-old-school-server');
}

export default function Midhem80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-old-school-server" />;
}
