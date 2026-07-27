import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-sweden');
}

export default function HarmoniaOtPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-sweden" />;
}
