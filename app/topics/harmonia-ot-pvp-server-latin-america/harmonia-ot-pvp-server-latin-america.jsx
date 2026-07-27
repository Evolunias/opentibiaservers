import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-latin-america');
}

export default function HarmoniaOtPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-latin-america" />;
}
