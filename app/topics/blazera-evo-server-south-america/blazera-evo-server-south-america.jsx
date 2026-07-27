import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-south-america');
}

export default function BlazeraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-south-america" />;
}
