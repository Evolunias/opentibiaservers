import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-south-america');
}

export default function SeasonalClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-south-america" />;
}
