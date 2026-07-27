import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-old-school-server');
}

export default function Blazera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-old-school-server" />;
}
