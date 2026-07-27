import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-usa');
}

export default function OtmadnessEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-usa" />;
}
