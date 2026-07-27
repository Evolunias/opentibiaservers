import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-argentina');
}

export default function OtmadnessRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-argentina" />;
}
