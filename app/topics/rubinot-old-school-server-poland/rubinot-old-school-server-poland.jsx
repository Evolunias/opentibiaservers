import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-poland');
}

export default function RubinotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-poland" />;
}
