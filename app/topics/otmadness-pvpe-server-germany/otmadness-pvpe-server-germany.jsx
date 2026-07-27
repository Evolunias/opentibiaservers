import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-germany');
}

export default function OtmadnessPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-germany" />;
}
