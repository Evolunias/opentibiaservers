import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-brazil');
}

export default function MiracleOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-brazil" />;
}
