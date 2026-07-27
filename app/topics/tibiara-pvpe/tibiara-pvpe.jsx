import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe');
}

export default function TibiaraPvpeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe" />;
}
