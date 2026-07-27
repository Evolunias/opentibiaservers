import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-old-school-server');
}

export default function Blazera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-old-school-server" />;
}
