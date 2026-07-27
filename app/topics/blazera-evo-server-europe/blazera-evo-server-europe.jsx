import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-europe');
}

export default function BlazeraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-europe" />;
}
