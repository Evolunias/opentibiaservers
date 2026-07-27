import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-germany');
}

export default function OtmadnessRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-germany" />;
}
