import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-usa');
}

export default function RubinotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-usa" />;
}
