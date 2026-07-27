import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-north-america');
}

export default function BlazeraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-north-america" />;
}
