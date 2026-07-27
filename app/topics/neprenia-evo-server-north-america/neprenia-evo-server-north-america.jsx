import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-north-america');
}

export default function NepreniaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-north-america" />;
}
