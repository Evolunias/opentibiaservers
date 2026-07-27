import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-germany');
}

export default function HarmoniaOtNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-germany" />;
}
