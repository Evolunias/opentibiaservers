import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-sweden');
}

export default function RubinotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-sweden" />;
}
