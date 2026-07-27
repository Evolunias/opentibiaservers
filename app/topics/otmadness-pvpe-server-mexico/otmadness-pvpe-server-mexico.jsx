import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-mexico');
}

export default function OtmadnessPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-mexico" />;
}
