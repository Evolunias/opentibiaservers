import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-poland');
}

export default function ShadowcoresEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-poland" />;
}
