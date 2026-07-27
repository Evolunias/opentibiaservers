import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-uk');
}

export default function OldSchoolClientUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-uk" />;
}
