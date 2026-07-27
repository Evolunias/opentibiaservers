import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-server');
}

export default function OldSchoolAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-server" />;
}
