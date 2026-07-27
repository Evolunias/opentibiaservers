import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-north-america');
}

export default function MiracleOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-north-america" />;
}
