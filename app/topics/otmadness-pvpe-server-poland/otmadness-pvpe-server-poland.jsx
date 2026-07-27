import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-poland');
}

export default function OtmadnessPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-poland" />;
}
