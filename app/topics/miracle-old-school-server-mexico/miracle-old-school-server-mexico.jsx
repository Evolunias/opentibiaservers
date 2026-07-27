import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-mexico');
}

export default function MiracleOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-mexico" />;
}
