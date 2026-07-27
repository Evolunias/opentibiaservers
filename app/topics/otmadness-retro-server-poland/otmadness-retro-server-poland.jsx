import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-poland');
}

export default function OtmadnessRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-poland" />;
}
