import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-sweden');
}

export default function HarmoniaOtPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-sweden" />;
}
