import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-north-america');
}

export default function HarmoniaOtNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-north-america" />;
}
