import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-uk');
}

export default function OldSchoolServersUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-uk" />;
}
