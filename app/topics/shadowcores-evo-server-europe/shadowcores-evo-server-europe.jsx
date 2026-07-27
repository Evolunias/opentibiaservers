import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-europe');
}

export default function ShadowcoresEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-europe" />;
}
