import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-argentina');
}

export default function RubinotOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-argentina" />;
}
