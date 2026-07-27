import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-south-america');
}

export default function NepreniaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-south-america" />;
}
