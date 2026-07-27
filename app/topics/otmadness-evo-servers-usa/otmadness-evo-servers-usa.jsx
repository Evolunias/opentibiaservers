import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-servers-usa');
}

export default function OtmadnessEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-servers-usa" />;
}
