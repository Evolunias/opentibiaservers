import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe');
}

export default function ClassicusPvpeKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe" />;
}
