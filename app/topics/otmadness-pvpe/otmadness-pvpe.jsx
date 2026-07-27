import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe');
}

export default function OtmadnessPvpeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe" />;
}
