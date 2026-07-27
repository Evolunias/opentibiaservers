import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-servers-usa');
}

export default function ThaisotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-servers-usa" />;
}
