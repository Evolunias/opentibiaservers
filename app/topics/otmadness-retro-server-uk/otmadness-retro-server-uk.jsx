import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-uk');
}

export default function OtmadnessRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-uk" />;
}
