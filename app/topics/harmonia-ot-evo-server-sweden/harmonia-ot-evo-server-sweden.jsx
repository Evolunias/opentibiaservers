import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-sweden');
}

export default function HarmoniaOtEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-sweden" />;
}
