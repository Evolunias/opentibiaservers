import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-mexico');
}

export default function RubinotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-mexico" />;
}
