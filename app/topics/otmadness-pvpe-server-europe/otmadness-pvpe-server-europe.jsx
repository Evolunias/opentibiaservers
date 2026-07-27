import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-europe');
}

export default function OtmadnessPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-europe" />;
}
