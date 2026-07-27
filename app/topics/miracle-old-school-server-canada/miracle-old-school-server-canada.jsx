import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-canada');
}

export default function MiracleOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-canada" />;
}
