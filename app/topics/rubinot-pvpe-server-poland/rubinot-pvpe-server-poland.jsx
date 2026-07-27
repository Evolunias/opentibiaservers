import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-poland');
}

export default function RubinotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-poland" />;
}
