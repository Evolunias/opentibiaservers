import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-servers-poland');
}

export default function OtmadnessEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-servers-poland" />;
}
