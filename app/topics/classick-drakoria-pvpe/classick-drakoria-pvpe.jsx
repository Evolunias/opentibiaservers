import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe');
}

export default function ClassickDrakoriaPvpeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe" />;
}
