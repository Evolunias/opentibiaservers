import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-usa');
}

export default function HarmoniaOtPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-usa" />;
}
