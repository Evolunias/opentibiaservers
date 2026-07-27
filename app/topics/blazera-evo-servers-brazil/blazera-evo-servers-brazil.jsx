import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-servers-brazil');
}

export default function BlazeraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-servers-brazil" />;
}
