import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-europe');
}

export default function DemolidoresSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-europe" />;
}
