import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-north-america');
}

export default function OtmadnessEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-north-america" />;
}
