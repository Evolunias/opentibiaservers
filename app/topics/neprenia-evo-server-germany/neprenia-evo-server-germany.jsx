import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-germany');
}

export default function NepreniaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-germany" />;
}
