import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-brazil');
}

export default function BlazeraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-brazil" />;
}
