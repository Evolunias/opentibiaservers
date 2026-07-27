import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-germany');
}

export default function DemolidoresSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-germany" />;
}
