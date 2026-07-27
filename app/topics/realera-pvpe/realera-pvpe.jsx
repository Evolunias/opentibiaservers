import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe');
}

export default function RealeraPvpeKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe" />;
}
