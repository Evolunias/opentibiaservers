import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-servers-poland');
}

export default function BlazeraEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-servers-poland" />;
}
