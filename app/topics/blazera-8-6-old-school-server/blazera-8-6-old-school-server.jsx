import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-old-school-server');
}

export default function Blazera86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-old-school-server" />;
}
