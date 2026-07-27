import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-old-school-server');
}

export default function Blazera80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-old-school-server" />;
}
