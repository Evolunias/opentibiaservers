import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-seasonal-server');
}

export default function HarmoniaOt84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-seasonal-server" />;
}
