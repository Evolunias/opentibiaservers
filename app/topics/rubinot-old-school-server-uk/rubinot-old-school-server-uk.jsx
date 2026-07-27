import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-uk');
}

export default function RubinotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-uk" />;
}
