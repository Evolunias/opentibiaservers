import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-canada');
}

export default function OldSchoolOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-canada" />;
}
