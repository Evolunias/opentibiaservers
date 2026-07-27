import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-old-school-server');
}

export default function Blazera1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-old-school-server" />;
}
