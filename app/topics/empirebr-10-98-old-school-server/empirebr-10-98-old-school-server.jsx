import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-old-school-server');
}

export default function Empirebr1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-old-school-server" />;
}
