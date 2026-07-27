import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-harmonia-ot-server');
}

export default function SeasonalHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-harmonia-ot-server" />;
}
