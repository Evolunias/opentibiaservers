import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-old-school-server');
}

export default function Blazera15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-old-school-server" />;
}
