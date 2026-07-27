import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe');
}

export default function RealestaPvpeKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe" />;
}
