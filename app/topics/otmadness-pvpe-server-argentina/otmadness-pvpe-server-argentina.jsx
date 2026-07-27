import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-argentina');
}

export default function OtmadnessPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-argentina" />;
}
