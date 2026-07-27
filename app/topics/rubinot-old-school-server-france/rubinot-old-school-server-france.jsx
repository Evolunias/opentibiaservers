import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-france');
}

export default function RubinotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-france" />;
}
