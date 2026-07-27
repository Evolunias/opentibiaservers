import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-uk');
}

export default function UnlineOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-uk" />;
}
