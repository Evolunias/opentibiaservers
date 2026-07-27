import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-uk');
}

export default function ShadowcoresEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-uk" />;
}
