import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-brazil');
}

export default function OtmadnessRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-brazil" />;
}
