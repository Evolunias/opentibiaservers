import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-latin-america');
}

export default function MiracleOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-latin-america" />;
}
