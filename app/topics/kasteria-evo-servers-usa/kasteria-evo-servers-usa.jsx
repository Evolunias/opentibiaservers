import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-servers-usa');
}

export default function KasteriaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-servers-usa" />;
}
