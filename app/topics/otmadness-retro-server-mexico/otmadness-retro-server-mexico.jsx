import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-mexico');
}

export default function OtmadnessRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-mexico" />;
}
