import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-old-school-server');
}

export default function Blazera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-old-school-server" />;
}
