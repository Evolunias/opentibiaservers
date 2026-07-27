import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-old-school-server');
}

export default function Blazera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-old-school-server" />;
}
