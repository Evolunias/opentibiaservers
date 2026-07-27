import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-usa');
}

export default function NepreniaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-usa" />;
}
