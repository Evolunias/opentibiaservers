import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-canada');
}

export default function SeasonalServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-canada" />;
}
