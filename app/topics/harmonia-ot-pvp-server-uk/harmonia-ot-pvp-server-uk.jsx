import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-uk');
}

export default function HarmoniaOtPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-uk" />;
}
