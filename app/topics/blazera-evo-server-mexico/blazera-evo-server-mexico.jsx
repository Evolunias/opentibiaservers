import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-mexico');
}

export default function BlazeraEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-mexico" />;
}
