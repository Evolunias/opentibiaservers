import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-uk');
}

export default function OldSchoolOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-uk" />;
}
