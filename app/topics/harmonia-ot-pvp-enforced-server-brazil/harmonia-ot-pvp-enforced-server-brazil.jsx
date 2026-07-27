import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-enforced-server-brazil');
}

export default function HarmoniaOtPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-enforced-server-brazil" />;
}
