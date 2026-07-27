import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-servers-usa');
}

export default function ShadowcoresEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-servers-usa" />;
}
