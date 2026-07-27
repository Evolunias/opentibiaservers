import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-old-school-server');
}

export default function Blazera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-old-school-server" />;
}
