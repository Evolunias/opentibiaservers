import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-old-school-server');
}

export default function Blazera76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-old-school-server" />;
}
