import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe');
}

export default function CarlinotPvpeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe" />;
}
