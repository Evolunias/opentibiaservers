import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe');
}

export default function RubinotPvpeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe" />;
}
