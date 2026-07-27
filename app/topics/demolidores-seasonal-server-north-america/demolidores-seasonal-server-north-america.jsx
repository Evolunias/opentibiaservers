import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-north-america');
}

export default function DemolidoresSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-north-america" />;
}
