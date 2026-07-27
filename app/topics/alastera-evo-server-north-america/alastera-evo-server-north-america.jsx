import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-north-america');
}

export default function AlasteraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-north-america" />;
}
