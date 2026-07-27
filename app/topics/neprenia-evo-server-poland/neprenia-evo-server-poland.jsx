import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-poland');
}

export default function NepreniaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-poland" />;
}
