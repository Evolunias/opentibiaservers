import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-usa');
}

export default function OtmadnessRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-usa" />;
}
