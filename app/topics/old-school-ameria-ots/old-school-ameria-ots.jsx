import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-ots');
}

export default function OldSchoolAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-ots" />;
}
