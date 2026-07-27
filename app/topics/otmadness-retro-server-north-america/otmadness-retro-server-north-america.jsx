import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-north-america');
}

export default function OtmadnessRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-north-america" />;
}
