import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-canada');
}

export default function NepreniaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-canada" />;
}
