import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-poland');
}

export default function MiracleOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-poland" />;
}
