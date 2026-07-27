import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria');
}

export default function OldSchoolKasteriaKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria" />;
}
