import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-poland');
}

export default function HarmoniaOtSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-poland" />;
}
