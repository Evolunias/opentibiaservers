import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-north-america');
}

export default function RubinotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-north-america" />;
}
