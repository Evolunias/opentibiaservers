import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-servers-usa');
}

export default function CalmeraOtEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-servers-usa" />;
}
