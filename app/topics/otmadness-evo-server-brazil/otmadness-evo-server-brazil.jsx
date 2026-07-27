import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-brazil');
}

export default function OtmadnessEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-brazil" />;
}
