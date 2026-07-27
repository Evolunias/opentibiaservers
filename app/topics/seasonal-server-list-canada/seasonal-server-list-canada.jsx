import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-canada');
}

export default function SeasonalServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-canada" />;
}
