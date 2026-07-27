import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-europe');
}

export default function HarmoniaOtPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-europe" />;
}
