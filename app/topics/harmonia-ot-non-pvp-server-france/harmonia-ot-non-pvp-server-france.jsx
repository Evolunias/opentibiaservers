import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-france');
}

export default function HarmoniaOtNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-france" />;
}
