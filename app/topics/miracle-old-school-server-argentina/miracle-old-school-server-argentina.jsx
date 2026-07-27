import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-argentina');
}

export default function MiracleOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-argentina" />;
}
