import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-france');
}

export default function MiracleOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-france" />;
}
