import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-north-america');
}

export default function SeasonalOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-north-america" />;
}
