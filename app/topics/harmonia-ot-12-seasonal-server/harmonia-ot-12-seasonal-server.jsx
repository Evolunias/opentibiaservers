import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-seasonal-server');
}

export default function HarmoniaOt12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-seasonal-server" />;
}
