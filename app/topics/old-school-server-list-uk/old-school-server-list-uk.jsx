import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-uk');
}

export default function OldSchoolServerListUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-uk" />;
}
