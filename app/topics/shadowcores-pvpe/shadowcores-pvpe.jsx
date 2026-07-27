import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe');
}

export default function ShadowcoresPvpeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe" />;
}
