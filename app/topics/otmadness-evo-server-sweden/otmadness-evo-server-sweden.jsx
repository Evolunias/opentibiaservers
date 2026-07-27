import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-sweden');
}

export default function OtmadnessEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-sweden" />;
}
