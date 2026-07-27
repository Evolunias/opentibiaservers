import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-usa');
}

export default function BlazeraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-usa" />;
}
