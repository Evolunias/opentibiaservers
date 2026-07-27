import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-ots');
}

export default function OldSchoolKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-ots" />;
}
