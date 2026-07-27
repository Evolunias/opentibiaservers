import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-mexico');
}

export default function HarmoniaOtPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-mexico" />;
}
