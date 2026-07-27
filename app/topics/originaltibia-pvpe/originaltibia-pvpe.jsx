import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe');
}

export default function OriginaltibiaPvpeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe" />;
}
