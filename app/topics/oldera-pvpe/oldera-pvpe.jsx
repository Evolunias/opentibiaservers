import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe');
}

export default function OlderaPvpeKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe" />;
}
