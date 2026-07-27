import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-canada');
}

export default function OtmadnessRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-canada" />;
}
