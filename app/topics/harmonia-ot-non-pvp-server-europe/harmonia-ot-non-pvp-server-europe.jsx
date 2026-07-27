import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-europe');
}

export default function HarmoniaOtNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-europe" />;
}
