import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-poland');
}

export default function BlazeraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-poland" />;
}
