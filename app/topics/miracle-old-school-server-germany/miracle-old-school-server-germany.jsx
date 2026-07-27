import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-germany');
}

export default function MiracleOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-germany" />;
}
