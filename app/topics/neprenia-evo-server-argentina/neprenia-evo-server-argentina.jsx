import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-argentina');
}

export default function NepreniaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-argentina" />;
}
