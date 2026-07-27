import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-brazil');
}

export default function DemolidoresSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-brazil" />;
}
