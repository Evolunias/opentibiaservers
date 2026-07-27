import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-old-school-server');
}

export default function Blazera74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-old-school-server" />;
}
