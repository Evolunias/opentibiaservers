import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-sweden');
}

export default function BlazeraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-sweden" />;
}
