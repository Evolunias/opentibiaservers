import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-ot');
}

export default function OldSchoolAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-ot" />;
}
