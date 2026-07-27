import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-germany');
}

export default function ShadowcoresEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-germany" />;
}
