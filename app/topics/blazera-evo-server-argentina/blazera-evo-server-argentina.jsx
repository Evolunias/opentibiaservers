import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-argentina');
}

export default function BlazeraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-argentina" />;
}
