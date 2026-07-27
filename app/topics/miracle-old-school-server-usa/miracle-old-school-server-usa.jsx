import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-usa');
}

export default function MiracleOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-usa" />;
}
