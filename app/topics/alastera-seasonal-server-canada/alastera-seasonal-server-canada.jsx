import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-canada');
}

export default function AlasteraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-canada" />;
}
