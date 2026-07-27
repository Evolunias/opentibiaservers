import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-servers-usa');
}

export default function NtoStarEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-servers-usa" />;
}
