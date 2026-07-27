import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-south-america');
}

export default function SeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-south-america" />;
}
