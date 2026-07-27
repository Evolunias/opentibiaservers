import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-servers-brazil');
}

export default function OtmadnessEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-servers-brazil" />;
}
