import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe');
}

export default function ElderaPvpeKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe" />;
}
