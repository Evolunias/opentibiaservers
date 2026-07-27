import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-old-school-server');
}

export default function Blazera11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-old-school-server" />;
}
