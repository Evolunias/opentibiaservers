import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-south-america');
}

export default function OtmadnessEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-south-america" />;
}
