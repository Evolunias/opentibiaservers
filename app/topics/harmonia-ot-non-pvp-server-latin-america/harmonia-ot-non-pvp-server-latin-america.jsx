import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-latin-america');
}

export default function HarmoniaOtNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-latin-america" />;
}
