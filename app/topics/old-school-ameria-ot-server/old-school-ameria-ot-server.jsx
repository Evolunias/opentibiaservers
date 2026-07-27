import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-ot-server');
}

export default function OldSchoolAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-ot-server" />;
}
