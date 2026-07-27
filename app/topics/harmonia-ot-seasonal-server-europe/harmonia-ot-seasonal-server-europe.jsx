import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-europe');
}

export default function HarmoniaOtSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-europe" />;
}
