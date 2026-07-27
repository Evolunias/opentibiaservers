import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-north-america');
}

export default function HarmoniaOtPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-north-america" />;
}
