import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-mexico');
}

export default function HarmoniaOtNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-mexico" />;
}
