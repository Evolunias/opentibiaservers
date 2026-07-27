import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-latin-america');
}

export default function RubinotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-latin-america" />;
}
