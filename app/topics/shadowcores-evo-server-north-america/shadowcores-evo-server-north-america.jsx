import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-north-america');
}

export default function ShadowcoresEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-north-america" />;
}
