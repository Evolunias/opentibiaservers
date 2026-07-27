import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-germany');
}

export default function HarmoniaOtPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-germany" />;
}
