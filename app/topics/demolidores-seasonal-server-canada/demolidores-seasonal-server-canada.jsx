import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-canada');
}

export default function DemolidoresSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-canada" />;
}
