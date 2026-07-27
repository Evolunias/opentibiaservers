import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-old-school-server-south-america');
}

export default function RubinotOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-old-school-server-south-america" />;
}
