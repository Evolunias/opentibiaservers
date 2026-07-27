import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-canada');
}

export default function BlazeraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-canada" />;
}
