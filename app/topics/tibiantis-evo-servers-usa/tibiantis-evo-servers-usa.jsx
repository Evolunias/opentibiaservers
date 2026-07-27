import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-servers-usa');
}

export default function TibiantisEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-servers-usa" />;
}
