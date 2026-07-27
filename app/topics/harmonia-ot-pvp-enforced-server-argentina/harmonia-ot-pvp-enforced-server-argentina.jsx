import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-argentina');
}

export default function HarmoniaOtPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-argentina" />;
}
