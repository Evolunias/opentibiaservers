import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-sweden');
}

export default function MiracleOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-sweden" />;
}
