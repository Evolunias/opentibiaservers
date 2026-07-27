import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-servers-usa');
}

export default function BlazeraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-servers-usa" />;
}
