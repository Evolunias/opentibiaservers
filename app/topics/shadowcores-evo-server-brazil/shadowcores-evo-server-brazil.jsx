import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-brazil');
}

export default function ShadowcoresEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-brazil" />;
}
