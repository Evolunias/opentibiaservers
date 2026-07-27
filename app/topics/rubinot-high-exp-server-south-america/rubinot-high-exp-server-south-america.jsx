import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-south-america');
}

export default function RubinotHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-south-america" />;
}
