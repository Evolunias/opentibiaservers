import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe');
}

export default function TibiamePvpeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe" />;
}
