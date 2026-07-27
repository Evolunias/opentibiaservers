import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe');
}

export default function UnlinePvpeKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe" />;
}
