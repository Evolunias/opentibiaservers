import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-latin-america');
}

export default function OtmadnessRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-latin-america" />;
}
