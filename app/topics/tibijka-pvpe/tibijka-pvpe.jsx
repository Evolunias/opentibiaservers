import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe');
}

export default function TibijkaPvpeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe" />;
}
