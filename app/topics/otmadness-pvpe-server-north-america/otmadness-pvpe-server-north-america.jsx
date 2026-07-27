import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-north-america');
}

export default function OtmadnessPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-north-america" />;
}
