import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-uk');
}

export default function OldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-uk" />;
}
