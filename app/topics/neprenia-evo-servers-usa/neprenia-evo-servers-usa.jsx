import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-servers-usa');
}

export default function NepreniaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-servers-usa" />;
}
