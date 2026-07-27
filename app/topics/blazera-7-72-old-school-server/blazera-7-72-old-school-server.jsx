import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-old-school-server');
}

export default function Blazera772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-old-school-server" />;
}
