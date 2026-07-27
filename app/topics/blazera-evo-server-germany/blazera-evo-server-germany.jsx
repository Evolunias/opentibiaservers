import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-germany');
}

export default function BlazeraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-germany" />;
}
