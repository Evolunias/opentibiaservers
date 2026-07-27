import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-europe');
}

export default function OtmadnessRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-europe" />;
}
