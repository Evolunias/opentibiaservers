import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-france');
}

export default function OtmadnessRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-france" />;
}
