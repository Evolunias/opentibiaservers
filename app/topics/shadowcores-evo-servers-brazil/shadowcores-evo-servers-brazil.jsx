import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-servers-brazil');
}

export default function ShadowcoresEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-servers-brazil" />;
}
