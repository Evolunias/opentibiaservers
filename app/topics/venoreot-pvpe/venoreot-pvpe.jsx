import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe');
}

export default function VenoreotPvpeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe" />;
}
