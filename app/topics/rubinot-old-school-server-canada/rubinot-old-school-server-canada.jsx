import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-canada');
}

export default function RubinotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-canada" />;
}
