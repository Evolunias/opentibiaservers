import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-mexico');
}

export default function OtmadnessEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-mexico" />;
}
