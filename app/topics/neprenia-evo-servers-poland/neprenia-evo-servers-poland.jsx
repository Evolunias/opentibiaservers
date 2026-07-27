import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-servers-poland');
}

export default function NepreniaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-servers-poland" />;
}
