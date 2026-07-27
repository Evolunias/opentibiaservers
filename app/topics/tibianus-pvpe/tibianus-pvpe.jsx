import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe');
}

export default function TibianusPvpeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe" />;
}
