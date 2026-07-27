import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-uk');
}

export default function OtmadnessPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-uk" />;
}
