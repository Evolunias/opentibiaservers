import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-latin-america');
}

export default function OtmadnessPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-latin-america" />;
}
