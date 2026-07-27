import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-uk');
}

export default function DemolidoresSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-uk" />;
}
