import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-south-america');
}

export default function CalmeraOtEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-south-america" />;
}
