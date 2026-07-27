import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-usa');
}

export default function OtmadnessPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-usa" />;
}
