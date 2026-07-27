import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-canada');
}

export default function OtmadnessPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-canada" />;
}
