import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-south-america');
}

export default function AlasteraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-south-america" />;
}
