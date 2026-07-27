import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-south-america');
}

export default function SeasonalOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-south-america" />;
}
