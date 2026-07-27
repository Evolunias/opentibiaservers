import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe');
}

export default function AureraGlobalPvpeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe" />;
}
