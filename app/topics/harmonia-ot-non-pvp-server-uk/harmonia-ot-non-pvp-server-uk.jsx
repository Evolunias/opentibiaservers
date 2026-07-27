import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-uk');
}

export default function HarmoniaOtNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-uk" />;
}
