import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-old-school-server');
}

export default function Midhem96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-old-school-server" />;
}
